import React from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import moment from "moment";


export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => showTaskDate && (
    <div className="task-date" data-testid="task-date-overlay">
        <ul className="task-date__list">
            <li
                onClick={() => {
                    setShowTaskDate(false);
                    setTaskDate(moment().format('DD/MM/YYYY'));
                }}
                data-testid="task-date-overlay"
            >
                <span>

                </span>
            </li>

        </ul>
    </div>
);