const videoSources = [
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/43c2/951b/7f5d/4eb4-94f1-fefd891c2801/cca79408-987a-4781-a636-e9d5fb527763_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //wheelofTime
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/c350/1996/c979/4025-98a0-710251c385fd/6b72dc1a-17b2-4ce0-8e6c-0b004a6ead32_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //sitting in bars with cake
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/5918/855e/9aa4/40b7-9218-6e8c39ec294c/7854fc8c-a7bb-4b8b-b318-f396ee4cfa79_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //spiderman
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/afa3/0022/b418/49b7-bc67-bef7672b4c6a/bd0e3070-720c-443d-a2a7-d4888d719330_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //APdhilon
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3451/02b8/011b/4d63-bd7f-d06a821365ae/84f26c80-3873-496c-b9a0-c32e76133d77_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // satyaprem
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3944/c30a/b3c9/406a-a9a7-ca9d29403921/82b620ed-0bfa-4c1d-a2e5-9c76f401007d_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // bambai
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/1ebe/cc73/5b04/4b89-82ed-aea3d7397818/ff212611-ef2c-4eb9-a653-f4ec33fd95cd_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //jailer
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/03f3/7a52/66ac/4581-8e69-ed46435963c7/fcfc2f09-1b21-451f-810f-cecb50d559be_video_720p_2500kbps_audio_aaclc_128kbps.mp4", //pathaan
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3180/836e/c53e/4798-a77b-134ef60780a9/df8ce2b7-af0c-47c5-ba49-d4e51c1a90eb_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // made in heven
  "https://s3.ll.videorolls.row.aiv-cdn.net/ww_iad/3944/c30a/b3c9/406a-a9a7-ca9d29403921/82b620ed-0bfa-4c1d-a2e5-9c76f401007d_video_720p_2500kbps_audio_aaclc_128kbps.mp4", // bambai
];

const thumbnailImages = [
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_WheelOfTime_S2_NewEpisodeFridays/96a4efdc-aa46-4850-bba7-2346af384a2c._UR3840,1440_SX1440_FMwebp_.jpeg", //wheeloftime
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SittingInBarsWithCake/5a604b9f-e6af-4a17-add1-d660ecc860e8._UR3840,1440_AGaverage_SX1440_FMjpg_.jpeg", // sitting in bars with cake
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_SPIDERMAN_ATSV_99/1bcfcb5b-6ae2-43c2-b099-a8446ea76236._UR3840,1440_SX1440_FMwebp_.jpeg", //spiderman
  "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_APDhillon_S1/54fce2b2-b57a-4f85-a0b7-0cc2758d7e4a._UR3840,1440_SX1440_FMwebp_.jpeg", //APdhilon
  "https://m.media-amazon.com/images/S/pv-target-images/65eff17a123be72dca62367706c3a29a3137d6f05b31d958b362844217d61fc2._UR1920,1080_AGaverage_SX720_FMwebp_.jpg", // satyaprem
  "https://m.media-amazon.com/images/S/pv-target-images/db5c2195f571f646cb3201103c8a75b130bdb6870d6b7c8a021ffd1f2f3be6c9._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", //bambaai
  "https://m.media-amazon.com/images/S/pv-target-images/e40e50510afe106bb1c3d0d38451db12f800c66c80432c6d9a5ce260e9b0d6e1._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", // jailer
  "https://m.media-amazon.com/images/S/pv-target-images/65ed493d49c3c69394c3348aa0c9c814ab7c2e88ba822efd9ac2afe4db17a926._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", //pathaan
  "https://m.media-amazon.com/images/S/pv-target-images/3c8e7c1467fb8b4e363fd1aaaf6ef9c8ec03aa403b00500416e30b7a77808b21._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", // made in heaven
  "https://m.media-amazon.com/images/S/pv-target-images/db5c2195f571f646cb3201103c8a75b130bdb6870d6b7c8a021ffd1f2f3be6c9._UR1920,1080_AGaverage_SX1440_FMjpg_.jpg", //bambaai
];

const titleNames = [
  "Wheel of Time",
  "Sitting in Bars With Cake",
  "Spiderman",
  "A P Dhillon",
  "Satyaprem Ki Katha",
  "Bambaai Meri Jaan",
  "Jailer",
  "Pathaan",
  "Made In Heaven",
  "Bambaai Meri Jaan Copy",
];

export { videoSources, thumbnailImages, titleNames };
