// setup redux over initial store

const React = require('react')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')
const { extractCritical } = require('emotion-server')

import createStore from './src/state/createStore'

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const store = createStore()

  const ConnectedBody = () => <Provider store={store}>{bodyComponent}</Provider>

  //setup emotion SSR as plugin conflicts with REDUX
  const { html, ids, css } = extractCritical(renderToString(<ConnectedBody />))
  const criticalStyle = <style dangerouslySetInnerHTML={{ __html: css }} />

  const criticalIds = (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.__EMOTION_CRITICAL_CSS_IDS__ = ${JSON.stringify(ids)};`,
      }}
    />
  )
  setHeadComponents([criticalIds, criticalStyle])

  replaceBodyHTMLString(html)
}
