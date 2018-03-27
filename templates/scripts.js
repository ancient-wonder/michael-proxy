
module.exports = (items) => `
  <script src="/lib/react.development.js"></script>
  <script src="/lib/react-dom.development.js"></script>

  ${items.map(item => {
    return `<script src="/services/${item}.js"></script>`;
  }).join('\n')}

  <script>
  const listingId = parseInt(window.location.pathname.slice(10, window.location.pathname.length)) ||
              Math.floor(Math.random() * 200);
    ${items.map(item => {
      return `ReactDOM.hydrate(
        React.createElement(${item}, { id: listingId }),
        document.getElementById('${item}')
      );`;
    }).join('\n')}
  </script>
`;
