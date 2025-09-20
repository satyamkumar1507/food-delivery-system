import { screen ,render} from "@testing-library/react";
import RestrauntCard from "../RestrauntCard"
import MOCK_DATA from "../mocks/resCardMock.json"

test("should render RestaruntCard component with props Data",() => {
  
    render(<RestrauntCard allres={MOCK_DATA} />);

  const name = screen.getByText("Saladspoint");

  expect(name).toBeInTheDocument();

})