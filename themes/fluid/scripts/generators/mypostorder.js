'use strict';

hexo.config.index_generator_guang = Object.assign({
    per_page: typeof hexo.config.per_page === 'undefined' ? 10 : hexo.config.per_page,
    order_by: '-new'
}, hexo.config.index_generator_guang );

