import { Component } from "react";
import { Header, Form, Input, Button } from "./SearchBar.styled";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    e.preventDefault();
    this.props.handleSubmittedForm(e.currentTarget.elements.query.value);
    e.currentTarget.elements.query.value = "";
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleInputChange}>
          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <Button type="submit">
            <span>Search</span>
          </Button>
        </Form>
      </Header>
    );
  }
}
