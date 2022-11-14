export type Link = {
  title: string;
  url: string;
  ariaCurrent: 'page' | false;
  class: string;
}

export function getPageLinks(limit: number, numberOfPages: number, currentPage: number, url: string) {
  const pageLinks: Link[] = [];

  let start = 0;
  let end = numberOfPages;

  if (numberOfPages > limit) {
    start = (currentPage - (limit - 1) / 2) - 1;
    if (start < 0) {
      start = 0;
    }

    end = (start + limit);
    if (end > numberOfPages) {
      end = numberOfPages;
      start = numberOfPages - limit;
    }
  }

  if (start == 1) {
    pageLinks.push({
      title: '1',
      url: url.replace('/' + currentPage, '/' + 1),
      ariaCurrent: false,
      class: ''
    });
  } else if (start > 1) {
    pageLinks.push({
      title: '1',
      url: url.replace('/' + currentPage, '/' + 1),
      ariaCurrent: false,
      class: 'paging-collapse-after'
    });
  }

  for (let i = start; i < end; i++) {
    const userPage = i + 1;
    pageLinks.push({
      title: userPage.toString(),
      url: url.replace('/' + currentPage, '/' + userPage),
      ariaCurrent: userPage == currentPage ? 'page' : false,
      class: ''
    });
  }

  if (end < (numberOfPages - 1)) {
    pageLinks.push({
      title: numberOfPages.toString(),
      url: url.replace('/' + currentPage, '/' + numberOfPages),
      ariaCurrent: false,
      class: 'paging-collapse-before'
    });
  } else if (end < numberOfPages) {
    pageLinks.push({
      title: numberOfPages.toString(),
      url: url.replace('/' + currentPage, '/' + numberOfPages),
      ariaCurrent: false,
      class: ''
    });
  }

  return pageLinks;
}
