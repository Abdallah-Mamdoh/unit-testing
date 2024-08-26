import { render ,screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { describe, expect, test } from "vitest";

describe('Counter testing',()=>{
    test('counter component render test with increment button and count text', async () => {
      const {container , debug} = render(<Counter/>);
      
      debug()

      expect(screen.getByRole('button', { name : /click me/i })).toBeInTheDocument();
      expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name : /click me/i }));
      expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
    })
    
})