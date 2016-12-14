<template>

  <div class="container-fluid admin-panel">
    <div class="leftmenu-borad">
      <slot name="left_menu"></slot>
    </div>
    <div class="">
      <div class="left-container" >
        <slot name="left_container"></slot>
      </div>
    </div>
  </div>
</template>
<style type="text/css">
  .admin-panel{
    background-color: #f3f3f3;
    min-height: 100%;
  }
  .leftmenu-borad{
    /*border-right: 1px black solid;*/
    background: #f3f3f3;
    padding:0;
    float: left;
    width: 15%;
  }
  .left-container{
    background: #f3f3f3;
    width: 85%;
    float: right;
    /*font-size: 18px;*/
  }
</style>