/*
 * @Author: your name
 * @Date: 2021-10-19 09:48:46
 * @LastEditTime: 2021-12-18 11:28:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Projects\NeteaseCloudMusic\Vue-NeteaseCloudMusic\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

import * as types from "@/store/mutationsTypes.js";

import player from "./modules/player.js";
import login from "./modules/login.js";
import user from "./modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMouseDown: false,
    messageTipText: false,
    messageTipType: "correct",
    popupDownloadShow: false,
    popupAddToPlaylistShow: false,
    popupCreatePlaylistShow: false,
  },
  mutations: {
    updateIsMouseDown(state, payload) {
      state.isMouseDown = payload;
    },
    [types.UPDATE_POPUP_DOWNLOAD_SHOW](state, payload) {
      state.popupDownloadShow = payload;
    },
    [types.UPDATE_POPUP_ADD_TO_PLAYLIST](state, payload) {
      state.popupAddToPlaylistShow = payload;
    },
    [types.UPDATE_POPUP_CREATE_PLAYLIST](state, payload) {
      state.popupCreatePlaylistShow = payload;
    },
    [types.UPDATE_MESSAGE_TIP_TEXT](state, payload) {
      state.messageTipText = payload;
      setTimeout(() => {
        state.messageTipText = "";
      }, 1000);
    },
    [types.UPDATE_MESSAGE_TIP_TYPE](state, payload) {
      state.UPDATE_MESSAGE_TIP_TYPE = payload;
    },
  },
  actions: {},
  modules: {
    player,
    login,
    user,
  },
});
