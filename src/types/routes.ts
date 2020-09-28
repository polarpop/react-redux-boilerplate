import { RouteProps } from 'react-router';

export namespace Routes {
  export type Route = {
    id: number,
    component: () => Promise<any>,
    props: RouteProps,
    secure?: boolean
  }
}