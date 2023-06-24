import { useFeedPosts } from "../../posts/hooks/useFeedPosts"
import { render } from "@testing-library/react"
import PostsFeed from "./PostsFeed"
import postSample from "../../../../tests/__mocks__/post"

jest.mock('@/modules/posts/hooks/useFeedPosts')

const mockUseFeedPosts = () => {
  const mockedHook = useFeedPosts as jest.MockedFn<typeof useFeedPosts>

  mockedHook.mockReturnValue({
    page: 1,
    posts: [postSample],
    setPage: jest.fn(),
    pagesCount: 1
  })
}

describe('PostsFeed', () => {
  beforeEach(() => {
    mockUseFeedPosts()
  })

  it('render the component', () => {
    const { container } = render(<PostsFeed />)
    expect(container).toBeInTheDocument()
  })

  it('render post properties', () => {
    const { container } = render(<PostsFeed />)

    expect(container.querySelector('.MuiCardHeader-title')?.textContent).toBe(postSample.title)
    expect(container.querySelector('.MuiCardHeader-subheader')?.textContent).toBe(String(new Date(postSample.created_at).toLocaleDateString("pt-BR")))
    expect(container.querySelector('.MuiCardContent-root')?.textContent).toBe(postSample.description)
  })
})
