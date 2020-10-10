import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from "enzyme";
import Technologies from "./index";
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureMockStore();

const props = {
  technologiesList: [],
  fetchTechnologies: jest.fn(),
  technologies: { data: { technologiesList: [] } },
};
const store = mockStore({});

describe("Technologies component", () => {
  it("should be defined", () => expect(Technologies).toBeDefined());

  const wrapper = shallow(
    <Provider store={store}>
      <Technologies {...props} />
    </Provider>
  );
  it("should render correctly", () => expect(wrapper).toMatchSnapshot());
});
