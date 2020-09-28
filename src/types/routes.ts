import { RouteProps } from 'react-router';

export type RouteState = {
  id: number,
  component: () => Promise<any>,
  props: RouteProps,
  secure?: boolean
}