import { useFeedPosts } from "../../posts/hooks/useFeedPosts"
import { render, screen, fireEvent } from "@testing-library/react"
import PostsFeed from "./PostsFeed"
import postSample from "../../../../tests/__mocks__/post"

jest.mock('@/modules/posts/hooks/useFeedPosts')
const setPage = jest.fn()

const mockUseFeedPosts = () => {
  const mockedHook = useFeedPosts as jest.MockedFn<typeof useFeedPosts>

  mockedHook.mockReturnValue({
    page: 1,
    posts: [postSample],
    setPage: setPage,
    pagesCount: 2
  })
}

describe('PostsFeed', () => {
  beforeEach(() => {
    mockUseFeedPosts()
  })


  it('render title', () => {
    render(<PostsFeed />)

    expect(screen.getByText(/casa de praia em bauneario/i)).toBeInTheDocument()
  })

  it('render description', () => {
    render(<PostsFeed></PostsFeed>)

    expect(screen.getByText(/descrição aqui/i)).toBeInTheDocument()
  })

  it('render pagination elements', () => {
    render(<PostsFeed></PostsFeed>)

    expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /page 2/i })).toBeInTheDocument()
  })

  describe('when click on pagination button', () => {
    it('calls setPage', () => {
      render(<PostsFeed></PostsFeed>)

      const button = screen.getByRole('button', { name: /page 1/i })

      fireEvent.click(button)

      expect(setPage).toHaveBeenCalledWith(1)
    })
  })
})
