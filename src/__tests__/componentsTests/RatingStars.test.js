import RatingStars from "../../components/RatingStars"
import {render, screen} from '@testing-library/react'

describe("RatingStars", ()=>{

  

  it("Render rating starts correctly:", ()=> {
    
    const rating = {rate: 3.9, count: 10}
    const rating2 = {rate: 4.5, count: 120}

    render(
      <>
      <RatingStars rating={rating} />
      <RatingStars rating={rating2} />
      </>
    )

    const fullStars = screen.getAllByTestId("full-star")
    expect(fullStars).toHaveLength(7)
    const halfStars = screen.getAllByTestId("half-star")
    expect(halfStars).toHaveLength(2)
    const emptyStars = screen.getAllByTestId("empty-star")
    expect(emptyStars).toHaveLength(1)
  })

  it("renders the correct number of stars", () => {

    const rating = {rate: 3.9, count: 10}
    const rating2 = {rate: 4.5, count: 120}

    render(
      <>
      <RatingStars rating={rating} />
      <RatingStars rating={rating2} />
      </>
    )

    const countElements = screen.getAllByTestId("count")
    expect(countElements[0]).toHaveTextContent("(10)")
    expect(countElements[1]).toHaveTextContent("(120)")
  })
})