import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to calculate 4 + 1', () => {
    const button1 = container.getByTestId("number1");
    const addButton = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const equalbutton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual("5");
  })

  it('should be able to calculate 4 - 7', () => {
    const button7 = container.getByTestId("number7");
    const subtractButton = container.getByTestId("operator-subtract")
    const button4 = container.getByTestId("number4");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect (runningTotal.textContent).toEqual("3");
  })

  it('should be able to calculate 3 * 5', () => {
    const button5 = container.getByTestId("number5");
    const multiplyButton = container.getByTestId("operator-multiply");
    const button3 = container.getByTestId("number3");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button5);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(equalButton);
    expect (runningTotal.textContent).toEqual("15");
  })

  it('should be able to calculate 21 / 7', () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const divideButton = container.getByTestId("operator-divide");
    const button7 = container.getByTestId("number7");
    const equalButton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalButton);
    expect (runningTotal.textContent).toEqual("3");
  })
  
  it('should be able to concatenate multiple number button clicks', () => {
    const button5 = container.getByTestId("number5");
    const button8 = container.getByTestId("number8");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button5);
    fireEvent.click(button5);
    fireEvent.click(button8);
    expect(runningTotal.textContent).toEqual("558");
  })  

  
  it('should be able to chain mutliple operations together', () => {
    const button1 = container.getByTestId("number1");
    const addButton = container.getByTestId("operator-add");
    const button4 = container.getByTestId("number4");
    const multiplyButton = container.getByTestId("operator-multiply");
    const button2 = container.getByTestId("number2");
    const equalbutton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(addButton);
    fireEvent.click(button4);
    fireEvent.click(multiplyButton);
    fireEvent.click(button2)
    fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual("10");
  })

  it('should be able to clear the running total without affecting the calculation', () => {
      const button1 = container.getByTestId("number1");
      const button0 = container.getByTestId("number0");
      const divideButton = container.getByTestId("operator-divide");
      const button5 = container.getByTestId("number5");
      const addButton = container.getByTestId("operator-add");
      const button2 = container.getByTestId("number2");
      const clearButton = container.getByTestId("clear")
      const equalbutton = container.getByTestId("operator-equals");
      const runningTotal = container.getByTestId("running-total");
      fireEvent.click(button1);
      fireEvent.click(button0);
      fireEvent.click(divideButton);
      fireEvent.click(button5);
      fireEvent.click(addButton);
      fireEvent.click(button2);
      fireEvent.click(clearButton);
      fireEvent.click(equalbutton);
    expect(runningTotal.textContent).toEqual("2");
  })
  
  it('should be able to handle exceptional circumstances', () => {
    const button6 = container.getByTestId("number6");
    const divideButton = container.getByTestId("operator-divide");
    const button0 = container.getByTestId("button0");
    const equalbutton = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    except(runningTotal.textContent).toEqual("0");
  })
})
  




