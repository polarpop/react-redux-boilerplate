export function mapStateToProps<S = any>({ state }: { state: S }) {
  return { ...state };
}