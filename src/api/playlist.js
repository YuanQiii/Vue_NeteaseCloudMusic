/*
 * @Author: your name
 * @Date: 2021-12-16 21:42:31
 * @LastEditTime: 2022-03-10 17:51:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vue-NeteaseCloudMusic\src\api\playlist.js
 */
import request from "@/api/request"; // 引入封装好的axios

/**
 * @description: 创建歌单
 * @param {*} name
 * @param {*} type
 */
export function playlistCreateApi(name, type = "NORMAL") {
  return request({
    url: "playlist/create",
    method: "get",
    params: {
      name,
      type,
    },
  });
}

/**
 * @description: 对歌单添加或删除歌曲
 * @param {*} op 操作，add/del
 * @param {*} pid   歌单id
 * @param {*} tracks   歌曲 id,可多个,用逗号隔开
 * @return {*}
 */
export function playlistTracksApi(op, pid, tracks) {
  return request({
    url: "playlist/tracks",
    method: "get",
    params: {
      op,
      pid,
      tracks,
    },
  });
}

/**
 * @description: 获取歌单详情
 * @param {*} id
 * @param {*} s 歌单最近的 s 个收藏者,默认为 8
 */
export function playlistDetailApi(id, s = 8) {
  return request({
    url: "playlist/detail",
    method: "get",
    params: {
      id,
      s,
    },
  });
}

/**
 * @description: 获取歌单所有歌曲
 * @param {*} id
 */
export function playlistTrackAllApi(id) {
  return request({
    url: "playlist/track/all",
    method: "get",
    params: {
      id,
    },
  });
}

/**
 * @description: 收藏/取消收藏歌单
 * @param {*} id
 * @param {*} t 类型,1:收藏,2:取消收藏
 */
export function playlistSubscribeApi(t, id) {
  return request({
    url: "playlist/subscribe",
    method: "get",
    params: {
      t,
      id,
    },
  });
}

/**
 * @description: 歌单分类
 */
export function playlistCatlistApi() {
  return request({
    url: "playlist/catlist",
    method: "get",
  });
}

/**
 * @description: 歌单( 网友精选碟 )
 */
export function playlistTopApi(cat, offset = 0, limit = 35) {
  return request({
    url: "top/playlist",
    method: "get",
    params: {
      cat,
      offset,
      limit,
    },
  });
}
