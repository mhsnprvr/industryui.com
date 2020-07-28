/**
 * Editor
 */

// React
import React, { useState } from 'react'

// React Hook Form
import { Controller } from 'react-hook-form'

// Draft JS
import { Editor, EditorState, RichUtils } from 'draft-js'
import { BlockType } from './constants'
// TODO: Check how we name our services/DataType

export const DraftJs = ({ control, defaultValue, name, setValue }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const toggleInlineStyle = event => {
    event.preventDefault()
    const style = event.currentTarget.getAttribute('data-style')
    setEditorState(RichUtils.toggleInlineStyle(editorState, style))
  }

  const handleKeyCommand = (command, editorState) => {
    const newEditorState = RichUtils.handleKeyCommand(editorState, command)
    if (newEditorState) {
      setEditorState(newEditorState)
      return 'handled'
    }
    return 'not-handled'
  }
  const handleOnChange = state => {
    setEditorState(state)
    // This is returning the current plain Value, we will have to see if we will get back the whole
    // State and then write a parser or how we will manage that
    setValue(name, state.getCurrentContent().getPlainText('\u0001'))
  }
  // TODO: Do the inputList dynamic creating a map with the Key-Value to generate the needed
  return (
    <>
      <input type='button' value='B' data-style='BOLD' onMouseDown={toggleInlineStyle} />
      <input type='button' value='I' data-style='ITALIC' onMouseDown={toggleInlineStyle} />
      <input type='button' value='S' data-style='STRIKETHROUGH' onMouseDown={toggleInlineStyle} />
      <input type='button' value='U' data-style='UNDERLINE' onMouseDown={toggleInlineStyle} />
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={props => (
          <Editor
            editorState={editorState}
            blockStyleFn={myBlockStyleFn}
            handleKeyCommand={handleKeyCommand}
            onChange={handleOnChange}
          />
        )}
      />
    </>
  )
}

function myBlockStyleFn (contentBlock) {
  const type = contentBlock.getType()
  if (type === BlockType.BLOCKQUOTE) {
    // TODO: return the right css according to be applied into the whole block
    return undefined
  }
}