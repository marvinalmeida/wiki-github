import { ContainerRepos } from "./style.itemRepo";

const ItemRepo = ({repo}) => {
  return <ContainerRepos>
    <h3>{repo.name}</h3>
    <p>{repo.id}</p>
    <div style={{display:'flex', flexDirection:'column'}}>
    <a href="#">remove</a>
    <a href="#">ver repositorio</a>
    </div>
   
  </ContainerRepos>;
};

export default ItemRepo;
