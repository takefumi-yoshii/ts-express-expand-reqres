import { apiGet } from './api'

document.getElementById('ping')!.addEventListener('click', () => {
  apiGet('/ping').then(({ data }) => {
    const counter = document.getElementById('count')!
    // data に推論が適用されている
    counter.innerHTML = `${data.count}`
  })
})

if (module.hot) {
  module.hot.accept()
}
