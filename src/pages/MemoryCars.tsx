import 'react-toastify/dist/ReactToastify.css'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Collapse } from 'react-bootstrap'
import { theme } from '../helpers/theme'
import { toast } from 'react-toastify'
import { useLocalStorage } from '../helpers/functions'
import { v1 } from 'uuid'
import React, { SetStateAction, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

export type QuestionData = {
  id: string
  question: string
  answer: string
  category: string
}

type PropsType = {
  toggle: () => void
  formShown: boolean
}

export const MemoryCard = (props: PropsType) => {
  const [question, setQuestion] = useState('')
  const [error, setError] = useState(null as string | null)
  const [category, setCategory] = useState('test' as string)
  const [answer, setAnswer] = useState('')
  const [formData, setFormData] = useLocalStorage('blog', [{}])
  console.log(props.formShown)

  const inputCheck = () => {
    if (!question.trim()) {
      setError('please enter the title')
    } else if (!/^[0-9a-zA-Z \-'_"]+$/.test(question)) {
      setError('please enter the title in English')
    } else if (!category) {
      setError('please select a category')
    } else if (!answer.trim()) {
      setError('the article was not entered ')
    } else {
      notification()
      // setData()
      setError(null)
    }
  }

  // const setData = () => {
  //   setFormData(prevData => [
  //     {
  //       id: v1(),
  //       question: question,
  //       answer: answer,
  //       category: category,
  //     },
  //     ...prevData,
  //   ])
  //   setFormShown(false)
  //   resetStates()
  // }
  // const toggle = () => props.setFormShown(!props.formShown)
  const notification = () => {
    toast('🙌 Upload successfully')
  }
  const resetStates = () => {
    setQuestion('')
    setAnswer('')
    setCategory('')
  }

  return (
    <Div_Wrapper>
      <Button_MyButton onClick={props.toggle}>Add article</Button_MyButton>
      <Collapse in={false}>
        <Form>
          <FormGroup>
            <Label>Enter a title for your post</Label>
            <Input
              rows={1}
              value={question}
              onChange={event => {
                setQuestion(event.currentTarget.value)
                setError(null)
              }}
            />
          </FormGroup>
        </Form>
      </Collapse>
    </Div_Wrapper>
    // <Div_Wrapper>
    //   <Container>
    //     <Header>
    //       <Button_MyButton onClick={toggle}>Add article</Button_MyButton>
    //       <Collapse isOpen={formShown}>
    //         <Form>
    //           <FormGroup>
    //             <Label>Enter a title for your post</Label>
    //             <Input
    //               rows={1}
    //               value={question}
    //               onChange={event => {
    //                 setQuestion(event.currentTarget.value)
    //                 setError(null)
    //               }}
    //             />
    //           </FormGroup>
    //           <FormGroup>
    //             <Label>Choose category</Label>
    //             {/*<Select*/}
    //             {/*  styles={customStyles}*/}
    //             {/*  options={options}*/}
    //             {/*  value={options.filter(option => option.value === category)}*/}
    //             {/*  onChange={e => {*/}
    //             {/*    if (e === null) return*/}
    //             {/*    setCategory(e.value)*/}
    //             {/*  }}*/}
    //             {/*/>*/}
    //           </FormGroup>
    //           <FormGroup>
    //             <Input
    //               value={answer}
    //               type='textarea'
    //               rows={10}
    //               onChange={event => {
    //                 setAnswer(event.currentTarget.value)
    //               }}
    //             />
    //           </FormGroup>
    //           <>
    //             {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    //             <Button_Add onClick={() => inputCheck()}>Save</Button_Add>
    //           </>
    //         </Form>
    //       </Collapse>
    //     </Header>
    //   </Container>
    // </Div_Wrapper>
  )
}

const Div_Wrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  font-size: ${theme.fonts.small};
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70%;
`
const Header = styled.div`
  width: 80%;
  ${theme.breakpoint.phone} {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }
`
const Button_MyButton = styled.button`
  font-size: ${theme.fonts.small};
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${theme.background.lightBlue};
  height: 4.5rem;
  width: fit-content;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: ${theme.colors.blue2};
  }
`
const Button_Add = styled(Button)`
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: ${theme.background.lightBlue};
  padding: 5px;
`
const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`
