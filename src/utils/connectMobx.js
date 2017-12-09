export default function connectMobx(obj) {
  return WrappedComponent => props => <WrappedComponent {...props} {...obj} />
}
