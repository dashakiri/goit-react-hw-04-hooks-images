import { Header, Form, Input, Button } from "./SearchBar.styled";

export function SearchBar({handleSubmittedForm}) {
  
  const handleInputChange = (e) => {
    e.preventDefault();
    handleSubmittedForm(e.currentTarget.elements.query.value);
    e.currentTarget.elements.query.value = "";
  };

    return (
      <Header>
        <Form onSubmit={handleInputChange}>
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
