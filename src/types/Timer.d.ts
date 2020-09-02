declare namespace Timer {
    type Task = {
        title: string,
        description: string,
        estimation: string,
    }

    type TaskResponseType = {
        data: Task
    }

    type SettingsResponseType = {
        data: object
    }

    type ITimerResponse = {
        settings: object;
        task: Task
    }
}