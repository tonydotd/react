export default function TabContent({ selectedTopic }) {
  return (
    <>
      {!selectedTopic &&
        <p>Please select a topic.</p>}
      {selectedTopic &&
        <div id="tab-content">
          <h3>{selectedTopic.title}</h3>
          <p>{selectedTopic.description}</p>
          <pre>
            <code>{selectedTopic.code}</code>
          </pre>
        </div>}
    </>
  );

}