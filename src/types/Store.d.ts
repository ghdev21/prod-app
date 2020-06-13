import {
    COUNT_DOWN_HAS_FETCHED,
    FINISH_ITERATION_HAS_FETCHED,
    INIT_TIMER_HAS_FETCHED,
    INIT_TIMER_IS_FETCHING,
    START_ITERATION_HAS_FETCHED
} from "../store/actions/actionTypes";

 declare namespace Store {

     type TimerAction =
         | { type: typeof INIT_TIMER_HAS_FETCHED, payload: Timer.ITimerResponse}
         | { type: typeof INIT_TIMER_IS_FETCHING}
         | { type: typeof START_ITERATION_HAS_FETCHED}
         | { type: typeof FINISH_ITERATION_HAS_FETCHED}
         | { type: typeof COUNT_DOWN_HAS_FETCHED}

     interface ITimerState {
        readonly settings: {} | null
        readonly task: Task | null,
        readonly time: number | 0,
        readonly executionQueue: number,
        readonly mode: string,
        readonly isCleaned: boolean,
        readonly isLoading: boolean
     }

     interface IState {
         readonly timer: ITimerState;
     }

     type Action = TimerAction;
     type GetStateType = () => Store.IState;

     type ThunkAction<R> = (dispatch: IThunkDispatch, getState: () => IState) => R;

     interface IThunkDispatch {
         <T extends Action>(action: T): T;
         <R>(asyncAction: ThunkAction<R>): R;
     }
     interface IStoreType {
       dispatch: Store.IThunkDispatch;
       getState: GetStateType;
     }
 }