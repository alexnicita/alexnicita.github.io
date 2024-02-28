import React, { useState } from 'react';
import styled from 'styled-components';

import { WindowDropDowns } from 'components';
import dropDownData from './dropDownData';

export default function Notepad({ onClose }) {

  const resume = `

Hello! Alex Nicita here. Fullstack freelancer. What do you need built?

Dev Experience Highlights:

  - SWE at big co's: NASA, Apple
  - CS research: Columbia (bachelors & masters in CS), IBM Research HQ
  - SWE at startups: Justworks, Qu Capital (acquired)
  - Venture:
      - Founded & raised ~$1M for a consumer fintech
      - Head of Engineering at Soma Capital
  - (now) Freelance / Fractional. Previous work for clients includes: 
      - advising a corporate spinout
      - coding part-time for a seed-stage web3 co

Contact: customer@alexnicita.com

This site works best on desktop. Have fun.

----

Posts for writing group for tech professionals:

---- 1/11/24

is everyone good
if i write haikus for my
biweekly writing

---- 1/24/24

for this writing sprint
i did some rust coding. mul-
ti threaded server

https://github.com/alexnicita/rust/tree/main/server

---- 2/10/24

coinstripebase?
what should I write now?
read this plz

https://academiccommons.columbia.edu/doi/10.7916/wxey-cr42

---- 2/28/24

imagine a squall
and it is rather peaceful
seasonal writing 

`

  const [docText, setDocText] = useState(resume);
  const [wordWrap, setWordWrap] = useState(false);

  function onClickOptionItem(item) {
    switch (item) {
      case 'Exit':
        onClose();
        break;
      case 'Word Wrap':
        setWordWrap(!wordWrap);
        break;
      case 'Time/Date':
        const date = new Date();
        setDocText(
          `${docText}${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        );
        break;
      default:
    }
  }
  function onTextAreaKeyDown(e) {
    // handle tabs in text area
    if (e.which === 9) {
      e.preventDefault();
      e.persist();
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      setDocText(`${docText.substring(0, start)}\t${docText.substring(end)}`);

      // asynchronously update textarea selection to include tab
      // workaround due to https://github.com/facebook/react/issues/14174
      requestAnimationFrame(() => {
        e.target.selectionStart = start + 1;
        e.target.selectionEnd = start + 1;
      });
    }
  }

  return (
    <Div>
      <section className="np__toolbar">
        <WindowDropDowns items={dropDownData} onClickItem={onClickOptionItem} />
      </section>
      <StyledTextarea
        wordWrap={wordWrap}
        value={docText}
        onChange={e => setDocText(e.target.value)}
        onKeyDown={onTextAreaKeyDown}
        spellCheck={false}
      />
    </Div>
  );
}

const Div = styled.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`;

const StyledTextarea = styled.textarea`
  flex: auto;
  outline: none;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  ${props => (props.wordWrap ? '' : 'white-space: nowrap; overflow-x: scroll;')}
  overflow-y: scroll;
  border: 1px solid #96abff;
`;
