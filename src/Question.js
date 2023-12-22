import React from 'react'

export default function Question({ question, onChangeAnswer }) {
    return (
        <div>
            <p className="text-lg pl-3 py-2">{question}</p>
            <input
                className="border-2 border-gray-300 block px-2.5 pb-2 pt-2 w-full text-sm  bg-transparent rounded appearance-none focus:outline-none focus:ring-0 peer"
                id="q1"
                name="q1"
                value=""
                onChange={(e) => onChangeAnswer(e.target.value)}
                type="text"
                placeholder="Answer here..."
            />
        </div>
    )
}
