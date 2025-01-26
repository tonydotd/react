import { useState } from 'react';
import { EXAMPLES } from '../data-with-examles';
import TabButton from './TabButton';
import TabContent from './TabContent';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(topic) {
    setSelectedTopic(topic)
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          Object.entries(EXAMPLES).map(([key, value]) => (
            <TabButton
              key={key}
              isSelected={selectedTopic?.key === key}
              onClick={() => handleSelect({ key, ...value })}
            >
              {value.title}
            </TabButton>
          ))
        }>
        <TabContent selectedTopic={selectedTopic} />
      </Tabs>
    </Section>
  )
}