import { api } from "../services/api";
import { useState } from "react";
import Button from "../components/button/button";
import Input from "../components/input/Input";
import ItemRepo from "../components/itemRepo/ItemRepo";
import { Container } from "./styles";

const App = () => {
  const [currentRepo, setCurrentRepo] = useState("");

  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    if(currentRepo.length > 7){
        const { data } = await api.get(`/repos${currentRepo}`);

    if (data.id) setRepos((prev) => [...prev, data]);
    }    
  };

  return (
    <Container>
      <img
        width={72}
        height={72}
        src="https://raw.githubusercontent.com/digitalinnovationone/trilha-react-desafio-2/master/src/assets/github.png"
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
        {repos.map(repo=> <ItemRepo repo={repo} /> )}
      
    </Container>
  );
};

export default App;
