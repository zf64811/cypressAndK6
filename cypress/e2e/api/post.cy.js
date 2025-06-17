describe('API test', () => {
  it('GET: article ', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        // 验证状态码和响应数据
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
      });
  });
  
  it('POST: create article', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: { title: 'foo', body: 'bar', userId: 1 }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });
});
