// eslint-disable-next-line require-yield
export default function* rootSaga() {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log('Sagas Running...');
  }
}
