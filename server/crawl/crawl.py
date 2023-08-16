from .naver_news_crawl.articlecrawler import ArticleCrawler

Crawler = ArticleCrawler()
Crawler.set_category('정치', '경제', '사회', '생활문화', '세계', '오피니언')
Crawler.set_date_range("2023-08-16", "2023-08-16")
Crawler.start()
