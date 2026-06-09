// search.js
const searchInput = document.querySelector('.site-search-input');
const searchBtn = document.querySelector('.site-search-btn');

// 点击搜索
searchBtn.addEventListener('click', function() {
  let keyword = searchInput.value.trim();
  if (!keyword) {
    alert('请输入搜索内容');
  } else {
    alert('正在搜索：' + keyword);
  }
});

// 回车也能搜索
searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});