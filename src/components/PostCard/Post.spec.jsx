import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole("img", { name: /title content/i })).toHaveAttribute(
      "src",
      "img/img.png"
    );

    expect(
      screen.getByRole("heading", { name: "title content", id: 1 })
    ).toBeInTheDocument();

    expect(screen.getByText("content post")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
