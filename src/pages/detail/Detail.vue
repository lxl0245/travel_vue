<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :ticketList="ticketList"></detail-list>
  </div>

</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      ticketList: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票',
              children: [
                {title: '成人三馆联票 - 携程'},
                {title: '成人三馆联票 - APP'}
              ]

            },
            {title: '成人五馆联票'},
            {title: '成人全馆通票'}
          ]
        },
        {title: '学生票'},
        {title: '儿童/老人票'},
        {title: '热销联票'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
