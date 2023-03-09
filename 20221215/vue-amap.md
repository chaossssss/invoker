    <ElAmapMarker
      v-for="(item, i) in schools"
      :key="selectedOrgType == '' ? item.name : item.orgName"
      :position="item.position"
      @click="clickMarker(item)"
    >