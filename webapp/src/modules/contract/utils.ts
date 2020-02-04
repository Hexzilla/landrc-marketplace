import { NFTCategory } from '../nft/types'

const env = process.env

const MANAToken = env.REACT_APP_MANA_ADDRESS!
const LANDRegistry = env.REACT_APP_LAND_ADDRESS!
const EstateRegistry = env.REACT_APP_ESTATE_ADDRESS!
const ExclusiveMasksCollection = env.REACT_APP_EXCLUSIVE_MASKS_ADDRESS!
const Halloween2019Collection = env.REACT_APP_HALLOWEEN_2019_ADDRESS!
const Xmas2019Collection = env.REACT_APP_XMAS_2019_ADDRESS!
const Marketplace = env.REACT_APP_MARKETPLACE_ADDRESS!

export const contractAddresses = {
  MANAToken,
  LANDRegistry,
  EstateRegistry,
  ExclusiveMasksCollection,
  Halloween2019Collection,
  Xmas2019Collection,
  Marketplace
}

export const contractSymbols = {
  [MANAToken]: 'MANA',
  [LANDRegistry]: 'LAND',
  [EstateRegistry]: 'Estates',
  [ExclusiveMasksCollection]: 'Exclusive Masks',
  [Halloween2019Collection]: 'Halloween',
  [Xmas2019Collection]: 'Xmas',
  [Marketplace]: 'Marketplace'
} as const

export const tokenContracts = {
  [MANAToken]: {
    name: 'MANAToken',
    address: MANAToken
  }
} as const

export const nftContracts = {
  [LANDRegistry]: {
    name: 'LANDRegistry',
    address: LANDRegistry,
    category: NFTCategory.PARCEL
  },
  [EstateRegistry]: {
    name: 'EstateRegistry',
    address: EstateRegistry,
    category: NFTCategory.ESTATE
  },
  [ExclusiveMasksCollection]: {
    name: 'ExclusiveMasksCollection',
    address: ExclusiveMasksCollection,
    category: NFTCategory.WEARABLE
  },
  [Halloween2019Collection]: {
    name: 'Halloween2019Collection',
    address: Halloween2019Collection,
    category: NFTCategory.WEARABLE
  },
  [Xmas2019Collection]: {
    name: 'Xmas2019Collection',
    address: Xmas2019Collection,
    category: NFTCategory.WEARABLE
  }
} as const

export function getContractName(contractAddress: string) {
  let contractName: keyof typeof contractAddresses
  for (contractName in contractAddresses) {
    if (contractAddresses[contractName] === contractAddress) {
      return contractName
    }
  }
}