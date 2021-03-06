export module QVBSC {
    export type Option = {
        optName: string,
        uid: string,
    }

    export type SliderState = {
        max: number,
        min: number,
        cur: number | string,
        optName: string,
        uid: string,
    }

    export type VotingDecision = {
        name: string,
        creditsRemaining: number,
        description: string,
        options: SliderState[],
        credits: number
    }

    export type Decision = {
        name: string,
        description: string,
        options: Option[],
        endTime: number
    }

    export type ResultOption = {
        optName: string,
        uid: string,
        votes: number
    }

    export type ResultDecision = {
        name: string,
        description: string,
        options: ResultOption[],
    }
}