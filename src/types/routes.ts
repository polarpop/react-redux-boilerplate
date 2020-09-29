import { RouteProps } from 'react-router';

export namespace Routes {
  export type Route = {
    id: number,
    component: (() => Promise<any>) | any,
    props: RouteProps,
    secure?: boolean,
    lazyLoad?: boolean
  }
}