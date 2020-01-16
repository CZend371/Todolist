import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { CheckBox } from "../components/Checkbox";

beforeEach(cleanup); //cleans the DOM

jest.mock('../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn()
                })),
            })),
        })),
    },
}));

describe('<Checkbox/>', () => {
    describe('Success', () => {
        it('renders the task checkbox', () => {
            const { queryByTestId } = render(
                <CheckBox id="1" taskDesc="finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
        });

        it('renders the task checkbox and accepts Onclick', () => {
            const { queryByTestId } = render(
                <CheckBox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.click(queryByTestId('checkbox-action'));
            console.group(fireEvent);
        });

        it('renders the task checkbox and accepts onKeyDown', () => {
            const { queryByTestId } = render(
                <CheckBox id="1" taskDesc="Finish this tutorial series!" />
            );
            expect(queryByTestId('checkbox-action')).toBeTruthy();
            fireEvent.keyDown(queryByTestId('checkbox-action'));
            console.group(fireEvent);
        });
    });