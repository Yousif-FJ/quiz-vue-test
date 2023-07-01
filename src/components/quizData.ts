interface QuizData {
    Name: string,
    Questions: QuizQuestion[],
}

interface QuizQuestion {
    Question: string,
    Choices: string[],
    CorrectChoiceIndex: number,
}
export function GetSampleQuiz(): QuizData {
    return {
        Name: "Math Quiz",
        Questions: [
            {
                Question: "What is 1 + 1?",
                Choices: ["1", "2", "3"],
                CorrectChoiceIndex: 1,
            },
            {
                Question: "What is 1 * 2?",
                Choices: ["1", "2", "3"],
                CorrectChoiceIndex: 1,
            },
            {
                Question: "What is 2 * 2?",
                Choices: ["4", "2", "3"],
                CorrectChoiceIndex: 0,
            },
        ]
    }
}
