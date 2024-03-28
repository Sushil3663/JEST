import { render, screen } from '@testing-library/react';
import App from './App';

test("List test", () => {
  render(<App />);
  let listItem = screen.getAllByRole("listitem")
  expect(listItem.length).toBe(3)
})


test("List test 2", () => {
  render(<App />);
  let listItem = screen.getAllByRole("listitem")
  expect(listItem.length).toEqual(3)
})


test("button test", () => {
  render(<App />);
  let btn1 = screen.getByRole("button", { name: "Click 1" })
  expect(btn1).toBeInTheDocument()
})
test("button test", () => {
  render(<App />);
  let btn = screen.getByRole("button", { name: "Click 2" })
  expect(btn).toBeInTheDocument()
})

test("input test", () => {
  render(<App />);
  let input1 = screen.getByRole("textbox", { name: "Input1" })
  expect(input1).toBeInTheDocument
})
test("input test", () => {
  render(<App />);
  let input2 = screen.getByRole("textbox", { name: "Input2" })
  expect(input2).toBeInTheDocument()
})

test("Non semantic Check", () => {
  render(<App />);
  let div = screen.getByRole("div")
  expect(div).toBeInTheDocument()
})

