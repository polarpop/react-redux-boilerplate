import { RootStateOrAny } from 'react-redux';

export type Action<Payload = Object> = {
  type: string,
  payload: Payload
}

export type State<S = RootStateOrAny> = S;