<template>
  <div>
    <div class="main">
      <div class="header">
        <h2>정밀검차</h2>
          <p>차량 사고이력 검색 사이트</p>
        </div>
      <div class="buttons">
        <router-link tag="a" to="/searcher">
          <div class="butleft">
            <h3>사고 검색</h3>
          </div>
        </router-link>
        <router-link tag="a" to="/business">
          <div class="butright">
            <h3>사고 기록</h3>
          </div>
        </router-link>
        </div>
      </div>
      <div class="second">
        <div class="blockchain">
          <div class="headb">
            <h4>BlockChain</h4>
            <p>블록체인은 체인 형태의 연결고리 기반 분산 데이터 저장환경에 저장되어 누구라도 임의로 수정할 수 없고<br>누구나 변경의 결과를 열람할 수 있는 분산 컴퓨팅 기술 기반의 데이터 대변 방지 기술이다.</p>
          </div>

          <div class="emblems">

          </div>
          </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    }
}
</script>

<style scoped>
</style>
