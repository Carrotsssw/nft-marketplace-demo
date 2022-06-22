import { defineStore } from "pinia";

// Mock result data
const datas = [
  {
    tokenID: 3540,
    name: "Pudgy Penguin #3540",
    image: "https://pudgypenguins.story-demo.ogn-review.net/nft/3540.png",
    collectionImage: "https://cdn.x2y2.io/nfts/ld70h0fflqae7tp.jpg/280.jpg",
    description:
      "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
    creatorName: "PudgyPenguinsKing",
    estimatePrice: 1,
    floorPrice: 1.3,
    acquisitionPrice: 0,
    acquisitionDate: 1655748928,
  },
  {
    tokenID: 4950,
    name: "Pudgy Penguin #4950",
    image: "https://pudgypenguins.story-demo.ogn-review.net/nft/4950.png",
    collectionImage: "https://cdn.x2y2.io/nfts/ld70h0fflqae7tp.jpg/280.jpg",
    description:
      "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
    creatorName: "PudgyPenguinsKing",
    estimatePrice: 1.116,
    floorPrice: 1.159,
    acquisitionPrice: 0,
    acquisitionDate: 1655837132,
  },
  {
    tokenID: 2703,
    name: "Pudgy Penguin #2703",
    image: "https://pudgypenguins.story-demo.ogn-review.net/nft/2703.png",
    collectionImage: "https://cdn.x2y2.io/nfts/ld70h0fflqae7tp.jpg/280.jpg",
    description:
      "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
    creatorName: "PudgyPenguinsKing",
    estimatePrice: 1.2,
    floorPrice: 1.294,
    acquisitionPrice: 0,
    acquisitionDate: 1653677407,
  },
  {
    tokenID: 933,
    name: "Pudgy Penguin #933",
    image: "https://pudgypenguins.story-demo.ogn-review.net/nft/933.png",
    collectionImage: "https://cdn.x2y2.io/nfts/ld70h0fflqae7tp.jpg/280.jpg",
    description:
      "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
    creatorName: "PudgyPenguinsKing",
    estimatePrice: 1.12,
    floorPrice: 1.294,
    acquisitionPrice: 0,
    acquisitionDate: 1652381407,
  },
];

function fetchList() {
  return new Promise((res) => {
    setTimeout(() => res(datas), 500);
  });
}

function fetchDetail(tokenID) {
  const result = datas.find((data) => +data.tokenID === +tokenID);

  return new Promise((res) => {
    setTimeout(() => res(result), 500);
  });
}

export const useListStore = defineStore({
  id: "list",
  state: () => ({
    list: [],
    detail: {},
    listLoading: true,
    detailLoading: false,
  }),
  actions: {
    async fetchList() {
      this.listLoading = true;
      try {
        this.list = await fetchList();
      } catch (error) {
        console.log("Err: fetchList", error);
      } finally {
        this.listLoading = false;
      }
    },
    async fetchDetail(tokenID) {
      this.detailLoading = true;
      try {
        this.detail = await fetchDetail(tokenID);
      } catch (error) {
        console.log("Err: fetchDetail", error);
      } finally {
        this.detailLoading = false;
      }
    },
  },
});
