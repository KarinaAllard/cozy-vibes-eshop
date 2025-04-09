export interface ISearchItem {
    displayLink: string,
    formattedUrl: string,
    htmlFormattedUrl: string,
    htmlSnippet: string,
    htmlTitle: string,
    kind: string,
    link: string,
    pagemap: {
        cse_thumbnail?: ISearchItemImg[],
  }
    snippet: string,
    title: string,
}

interface ISearchItemImg {
    height: string,
    src: string,
    width: string,
}