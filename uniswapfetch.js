const { ethers,BigNumber } = require("ethers");
const { abi: IUniswapV3PoolABI } = require("@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json");


require('dotenv').config()
const ALCHEMY_URL = process.env.ALCHEMY_URL;

const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);

const poolAddress = "0x36B18618c4131D8564A714fb6b4D2B1EdADc0042";

const poolContract = new ethers.Contract(poolAddress,IUniswapV3PoolABI,provider);


async function getPrice() {
    const slot = await poolContract.slot0();
    const Price = slot[0] ** 2/2**192;
    console.log(Price);
    return Price;
}
getPrice();
