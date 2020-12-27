Search.setIndex({docnames:["api/core","api/data","api/datasets","api/index","api/layers","api/models","api/tasks","benchmark/generation","benchmark/index","benchmark/property_prediction","benchmark/property_prediction_pretraining","benchmark/reasoning","benchmark/retrosynthesis","bibliography","examples/generation","examples/index","examples/property_prediction","examples/property_prediction_pretraining","examples/reasoning","examples/retrosynthesis","index","installation","notes/debug","notes/extension","notes/graph","notes/index","notes/layer","notes/variadic","quick_start"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/core.rst","api/data.rst","api/datasets.rst","api/index.rst","api/layers.rst","api/models.rst","api/tasks.rst","benchmark/generation.rst","benchmark/index.rst","benchmark/property_prediction.rst","benchmark/property_prediction_pretraining.rst","benchmark/reasoning.rst","benchmark/retrosynthesis.rst","bibliography.rst","examples/generation.rst","examples/index.rst","examples/property_prediction.rst","examples/property_prediction_pretraining.rst","examples/reasoning.rst","examples/retrosynthesis.rst","index.rst","installation.rst","notes/debug.rst","notes/extension.rst","notes/graph.rst","notes/index.rst","notes/layer.rst","notes/variadic.rst","quick_start.rst"],objects:{"drugdiscovery.core":{Configurable:[0,1,1,""],Engine:[0,1,1,""],Meter:[0,1,1,""],Registry:[0,1,1,""],_MetaContainer:[0,1,1,""]},"drugdiscovery.core.Engine":{config_dict:[0,2,1,""],epoch:[0,2,1,""],evaluate:[0,2,1,""],load:[0,2,1,""],load_config_dict:[0,2,1,""],save:[0,2,1,""],train:[0,2,1,""]},"drugdiscovery.core.Meter":{log:[0,2,1,""],step:[0,2,1,""],update:[0,2,1,""]},"drugdiscovery.core.Registry":{get:[0,2,1,""],register:[0,2,1,""],search:[0,2,1,""]},"drugdiscovery.core._MetaContainer":{context:[0,2,1,""],data_by_meta:[0,2,1,""],data_dict:[0,2,1,""]},"drugdiscovery.data":{DataLoader:[1,1,1,""],Graph:[1,1,1,""],KnowledgeGraphDataset:[1,1,1,""],Molecule:[1,1,1,""],MoleculeDataset:[1,1,1,""],PackedGraph:[1,1,1,""],PackedMolecule:[1,1,1,""],ReactionDataset:[1,1,1,""],feature:[1,0,0,"-"],graph_collate:[1,4,1,""],ordered_scaffold_split:[1,4,1,""],scaffold_split:[1,4,1,""],semisupervised:[1,4,1,""]},"drugdiscovery.data.Graph":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],graph:[1,2,1,""],index:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subgraph:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.KnowledgeGraphDataset":{load_tsv:[1,2,1,""],load_tsvs:[1,2,1,""]},"drugdiscovery.data.Molecule":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge2graph:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],from_molecule:[1,2,1,""],from_smiles:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],graph:[1,2,1,""],index:[1,2,1,""],ion_to_molecule:[1,2,1,""],node2graph:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subgraph:[1,2,1,""],to_molecule:[1,2,1,""],to_scaffold:[1,2,1,""],to_smiles:[1,2,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.MoleculeDataset":{edge_feature_dim:[1,2,1,""],load_csv:[1,2,1,""],load_smiles:[1,2,1,""],node_feature_dim:[1,2,1,""],num_atom_type:[1,2,1,""],num_bond_type:[1,2,1,""],tasks:[1,2,1,""]},"drugdiscovery.data.PackedGraph":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],get_item:[1,2,1,""],graph:[1,2,1,""],graph_mask:[1,2,1,""],index:[1,2,1,""],merge:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subbatch:[1,2,1,""],subgraph:[1,2,1,""],unpack:[1,2,1,""],unpack_data:[1,2,1,""],unpacked_type:[1,3,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.PackedMolecule":{batch_size:[1,2,1,""],compact:[1,2,1,""],connected_components:[1,2,1,""],context:[1,2,1,""],cpu:[1,2,1,""],cuda:[1,2,1,""],data_by_meta:[1,2,1,""],data_dict:[1,2,1,""],device:[1,2,1,""],edge:[1,2,1,""],edge_list:[1,2,1,""],edge_mask:[1,2,1,""],edge_weight:[1,2,1,""],from_dense:[1,2,1,""],from_molecule:[1,2,1,""],from_smiles:[1,2,1,""],full:[1,2,1,""],get_edge:[1,2,1,""],get_item:[1,2,1,""],graph:[1,2,1,""],graph_mask:[1,2,1,""],index:[1,2,1,""],ion_to_molecule:[1,2,1,""],merge:[1,2,1,""],node:[1,2,1,""],node_mask:[1,2,1,""],num_atom:[1,2,1,""],num_bond:[1,2,1,""],pack:[1,2,1,""],packed_type:[1,3,1,""],repeat:[1,2,1,""],split:[1,2,1,""],subbatch:[1,2,1,""],subgraph:[1,2,1,""],to_molecule:[1,2,1,""],to_scaffold:[1,2,1,""],to_smiles:[1,2,1,""],unpack:[1,2,1,""],unpack_data:[1,2,1,""],unpacked_type:[1,3,1,""],visualize:[1,2,1,""]},"drugdiscovery.data.ReactionDataset":{edge_feature_dim:[1,2,1,""],load_csv:[1,2,1,""],load_smiles:[1,2,1,""],node_feature_dim:[1,2,1,""],num_atom_type:[1,2,1,""],num_bond_type:[1,2,1,""],tasks:[1,2,1,""]},"drugdiscovery.data.feature":{ECFP:[1,4,1,""],atom_default:[1,4,1,""],atom_position:[1,4,1,""],bond_default:[1,4,1,""],explicit_property_prediction_node_feature:[1,4,1,""],molecule_default:[1,4,1,""],property_prediction_edge_feature:[1,4,1,""],property_prediction_node_feature:[1,4,1,""],reaction_center_identification_node_feature:[1,4,1,""]},"drugdiscovery.datasets":{BACE:[2,1,1,""],BBBP:[2,1,1,""],CEP:[2,1,1,""],ChEMBLFiltered:[2,1,1,""],ClinTox:[2,1,1,""],Delaney:[2,1,1,""],FB15k237:[2,1,1,""],FB15k:[2,1,1,""],FreeSolv:[2,1,1,""],HIV:[2,1,1,""],Lipophilicity:[2,1,1,""],MUV:[2,1,1,""],Malaria:[2,1,1,""],OPV:[2,1,1,""],QM8:[2,1,1,""],QM9:[2,1,1,""],SIDER:[2,1,1,""],Tox21:[2,1,1,""],ToxCast:[2,1,1,""],USPTO50k:[2,1,1,""],WN18:[2,1,1,""],WN18RR:[2,1,1,""],ZINC250k:[2,1,1,""],ZINC2m:[2,1,1,""]},"drugdiscovery.datasets.BACE":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.BBBP":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.CEP":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ChEMBLFiltered":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ClinTox":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Delaney":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.FB15k":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.FB15k237":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.FreeSolv":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.HIV":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Lipophilicity":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.MUV":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Malaria":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.OPV":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.QM8":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.QM9":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.SIDER":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.Tox21":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ToxCast":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.USPTO50k":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.WN18":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.WN18RR":{config_dict:[2,2,1,""],load_config_dict:[2,2,1,""],load_tsv:[2,2,1,""],load_tsvs:[2,2,1,""]},"drugdiscovery.datasets.ZINC250k":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.datasets.ZINC2m":{config_dict:[2,2,1,""],edge_feature_dim:[2,2,1,""],load_config_dict:[2,2,1,""],node_feature_dim:[2,2,1,""],num_atom_type:[2,2,1,""],num_bond_type:[2,2,1,""],tasks:[2,2,1,""]},"drugdiscovery.layers":{common:[4,0,0,"-"],conv:[4,0,0,"-"],distribution:[4,0,0,"-"],functional:[4,0,0,"-"]},"drugdiscovery.layers.common":{GaussianSmearing:[4,1,1,""],MultiLayerPerceptron:[4,1,1,""],MutualInformation:[4,1,1,""],PairNorm:[4,1,1,""],Sequential:[4,1,1,""]},"drugdiscovery.layers.common.GaussianSmearing":{forward:[4,2,1,""]},"drugdiscovery.layers.common.PairNorm":{forward:[4,2,1,""]},"drugdiscovery.layers.common.Sequential":{forward:[4,2,1,""]},"drugdiscovery.layers.conv":{ChebyshevConv:[4,1,1,""],ContinuousFilterConv:[4,1,1,""],GraphAttentionConv:[4,1,1,""],GraphConv:[4,1,1,""],GraphIsomorphismConv:[4,1,1,""],GraphIsomorphismConvPretraining:[4,1,1,""],MessagePassing:[4,1,1,""],MessagePassingBase:[4,1,1,""],NeuralFingerprintConv:[4,1,1,""],RelationalGraphConv:[4,1,1,""]},"drugdiscovery.layers.conv.ChebyshevConv":{forward:[4,2,1,""]},"drugdiscovery.layers.conv.GraphIsomorphismConvPretraining":{forward:[4,2,1,""]},"drugdiscovery.layers.conv.MessagePassingBase":{forward:[4,2,1,""]},"drugdiscovery.layers.distribution":{IndependentGaussian:[4,1,1,""]},"drugdiscovery.layers.distribution.IndependentGaussian":{forward:[4,2,1,""]},"drugdiscovery.layers.functional":{as_mask:[4,4,1,""],masked_mean:[4,4,1,""],mean_with_nan:[4,4,1,""],multi_slice_mask:[4,4,1,""],multinomial:[4,4,1,""],one_hot:[4,4,1,""],shifted_softplus:[4,4,1,""],variadic_cross_entropy:[4,4,1,""],variadic_log_softmax:[4,4,1,""],variadic_max:[4,4,1,""],variadic_mean:[4,4,1,""],variadic_sum:[4,4,1,""],variadic_topk:[4,4,1,""]},"drugdiscovery.models":{ChebyshevConvolutionalNetwork:[5,1,1,""],ComplEx:[5,1,1,""],DistMult:[5,1,1,""],GCN:[5,3,1,""],GIN:[5,3,1,""],GraphConvolutionalNetwork:[5,1,1,""],GraphIsomorphismNetwork:[5,1,1,""],InfoGraph:[5,1,1,""],MPNN:[5,3,1,""],MessagePassingNeuralNetwork:[5,1,1,""],NFP:[5,3,1,""],NeuralFingerprint:[5,1,1,""],RGCN:[5,3,1,""],RelationalGraphConvolutionalNetwork:[5,1,1,""],RotatE:[5,1,1,""],SchNet:[5,1,1,""],SimplE:[5,1,1,""],TransE:[5,1,1,""]},"drugdiscovery.models.ChebyshevConvolutionalNetwork":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.ComplEx":{config_dict:[5,2,1,""],forward:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.DistMult":{config_dict:[5,2,1,""],forward:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.GraphConvolutionalNetwork":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.GraphIsomorphismNetwork":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.InfoGraph":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.MessagePassingNeuralNetwork":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.NeuralFingerprint":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.RelationalGraphConvolutionalNetwork":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.RotatE":{config_dict:[5,2,1,""],forward:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.SchNet":{config_dict:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.SimplE":{config_dict:[5,2,1,""],forward:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.models.TransE":{config_dict:[5,2,1,""],forward:[5,2,1,""],load_config_dict:[5,2,1,""]},"drugdiscovery.tasks":{AttributeMasking:[6,1,1,""],AutoregressiveGeneration:[6,1,1,""],CenterIdentification:[6,1,1,""],ContextPrediction:[6,1,1,""],DeepGraphInfoMax:[6,1,1,""],Discriminator:[6,1,1,""],EdgePrediction:[6,1,1,""],GCPNGeneration:[6,1,1,""],PropertyPrediction:[6,1,1,""],SynthonCompletion:[6,1,1,""],Unsupervised:[6,1,1,""]},"drugdiscovery.tasks.AttributeMasking":{config_dict:[6,2,1,""],forward:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.tasks.AutoregressiveGeneration":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""],preprocess:[6,2,1,""]},"drugdiscovery.tasks.CenterIdentification":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""],predict_synthon:[6,2,1,""]},"drugdiscovery.tasks.ContextPrediction":{config_dict:[6,2,1,""],forward:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.tasks.DeepGraphInfoMax":{config_dict:[6,2,1,""],forward:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.tasks.Discriminator":{forward:[6,2,1,""]},"drugdiscovery.tasks.EdgePrediction":{config_dict:[6,2,1,""],forward:[6,2,1,""],load_config_dict:[6,2,1,""]},"drugdiscovery.tasks.GCPNGeneration":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""],preprocess:[6,2,1,""]},"drugdiscovery.tasks.PropertyPrediction":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""],preprocess:[6,2,1,""]},"drugdiscovery.tasks.SynthonCompletion":{config_dict:[6,2,1,""],load_config_dict:[6,2,1,""]},drugdiscovery:{core:[0,0,0,"-"],data:[1,0,0,"-"],datasets:[2,0,0,"-"],models:[5,0,0,"-"],tasks:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"120mb":24,"456k":10,"4tb":24,"50k":19,"abstract":26,"break":19,"case":[2,24,26,27],"class":[0,1,2,4,5,6,8,26],"default":[0,1,2,4,5,24],"final":26,"float":[0,4,5,6,27],"function":[0,1,2,3,5,6,24,26,27],"import":[0,16,17,18,19,24,26,27],"int":[0,1,2,4,5,6,16],"new":[1,26],"return":[0,1,2,4,5,6,19,24,26,27],"short":5,"true":[0,1,4,5,16,19],"var":26,"while":[4,5,6,17,19,24,27],And:17,Axes:1,BFS:6,For:[0,1,2,6,9,10,17,18,19,24,26,27],IDs:26,One:24,The:[0,1,6,9,10,16,17,18,19,24,26,27],Then:[18,19],There:[4,19,24],Use:[0,1,27],__init__:0,__main__:17,__name__:17,_in_j:26,_kernel:4,_lrschedul:0,_meta_typ:0,_metacontain:0,a_1:[1,24],a_i:[1,24],a_n:[1,24],abil:2,about:[0,24],abov:[17,24,26],absolut:1,acc:17,acceler:24,accept:[24,27],access:0,accord:[0,1],accuraci:[19,27],activ:[4,5],actual:17,adam:[16,17,18,19],add:[2,6,16,19,24],addit:6,addition:4,adjac:[1,24],adjust:1,adr:2,advantag:24,advers:2,adversarial_temperatur:18,affect:[1,2],afterward:[4,5,6,18],against:2,agent:6,agent_update_interv:6,aggreg:[6,26],aim:[16,18],algorithm:26,alia:[1,5],all:[0,1,4,5,6,17,19,24,26,27],all_loss:5,all_prefix_slic:27,allow_unus:4,along:27,alreadi:[0,1],also:[0,1,4,6,17,19,24,26,27],altern:24,although:[4,5,6],alwai:[1,2,24],among:24,analysi:2,ani:[0,1,4,6,19,24,26],append:[16,19,27],appli:[0,1,2,4,5,24,27],approach:20,approv:[2,16],arang:27,arbitari:24,arg:[1,4],argument:[0,1,4],aromat:[1,2],array_lik:1,as_mask:4,as_synthon:[2,19],aspect:17,assert:[0,1,4],assign:[0,1,24],atom:[0,1,2,6,17,19,27],atom_attribute_model:[6,17],atom_color:19,atom_default:1,atom_map:[1,19],atom_posit:1,atom_typ:[1,27],atoms_and_bond:19,attent:4,attribut:[1,2,6,10,15,19,25,27],attributemask:[6,17],audio:27,auprc:[6,16,17],auroc:[6,16,17],auto:[0,1],automat:[0,1,24],autoregress:[6,27],autoregressivegener:6,auxiliari:27,avail:[0,1,4,6],averag:17,avg:10,avoid:19,axes:1,axi:[1,27],bace:[2,10],barrier:2,base:[0,1,2,4,5,9,16,18,19,24,27],baselin:6,baseline_momentum:6,basic:[1,18],batch:[0,1,4,5,6,19,20,25,26],batch_norm:[4,5,16],batch_sampl:1,batch_siz:[0,1,16,17,18,19,26],bbbp:[2,10],bce:[6,16,17],beam:19,becaus:17,befor:19,begin:[1,24],behind:24,belong:[1,17],below:17,benchmark:[9,10,11,12,20],benzen:24,beta:2,better:[18,19],between:[4,5,6,19,24],bia:18,big:27,binari:[2,4,17,24],bind:2,bioassai:2,biolog:2,bipartit:26,block:[1,20],blood:2,blue:19,bmatrix:[1,24],bond:[1,2,6,19,24],bond_color:19,bond_default:1,bond_typ:[1,2],bool:[0,1,2,4,5],booltensor:4,both:[5,9,19,26],bound:24,brain:2,brc1:27,broadcast:25,broken:19,budget:19,build:[0,18,20],built:20,bunch:[0,24],calcul:2,call:[0,4,5,6,17,19],callabl:[1,2],can:[0,1,4,16,17,18,19,24,26,27],candid:[2,19],cannot:26,canon:[0,1],care:[4,5,6],cat:27,categori:[4,16],caus:2,caution:0,ccnc:27,cdot:[1,24],center:[1,4,6,15],center_topk:19,centeridentif:[6,19],cep:2,charg:1,chebyshev:[4,5],chebyshevconv:4,chebyshevconvolutionalnetwork:5,checkpoint:[0,19],chembl:10,chemblfilt:2,chemic:[1,2,16],chemistri:[4,5],chiral:1,chiral_tag:1,clamp:27,classif:[2,4,5,27],classmethod:[0,1,2,5,6],clean:2,clinic:[2,16],clintox:[2,10,16,17],close:19,code:[0,16,18,19,24],coeffici:2,collat:1,collate_fn:1,collect:[19,26],color:27,column:1,combin:[19,26],common:[3,24],commonli:24,compact:[1,24],compar:4,comparison:24,compat:6,complet:[6,15],complex:[5,11],compon:[1,24],compound:2,comprehens:20,comput:[1,4,5,6,24,26,27],concat:[4,5],concat_hidden:[5,16,19],concaten:27,concentr:2,config:[0,2,5,6],config_dict:[0,2,5,6],configur:[0,2,5,6],conflict:19,connect:[1,24],connected_compon:[1,19],consid:[1,9,10,12,18],consist:[16,24,27],construct:[0,1,2,5,6,17,18,24,27],constructor:4,contain:[0,1,4,9,10,11,12,16,19],context:[0,1,6,10,17,24],contextpredict:6,continu:[4,5],continuousfilterconv:4,contrast:6,conv:3,conveni:0,convent:[24,26],convert:[1,2,4,24,27],convolut:[4,5,19],copi:[0,1,27],core:[3,16,17,18,19,20,24],correct:[1,19],correspond:[4,6,19,24,26,27],cost:27,count:1,cover:20,cpu:[0,1,24],creat:[0,1,25,27],criterion:[6,16,17],cross:[4,17],crossentropyloss:17,csv:[1,2],csv_file:[1,2],ct_tox:16,cuda:[1,16,19,24],cum_siz:27,cumsum:[19,27],current:0,custom:[0,4,20,25,26],cut:5,cutoff:[4,5],data:[0,2,3,4,5,6,9,10,16,17,19,20,25,27],data_by_meta:[0,1],data_dict:[0,1],databas:2,dataload:1,dataset:[0,1,3,9,10,12,15,17,20],ddot:[1,24],debug:[20,25],decompos:2,deep:[4,6,10,17,24],deepgraphinfomax:6,def:[0,19,26,27],defin:[0,4,5,6,15,19,24,27],definit:0,degre:[24,26],degree_in:[24,26],degree_out:24,delanei:2,demonstr:[19,27],denot:[24,26],dens:[1,24,27],deriv:[0,4,6],derivedclass:0,describ:26,design:0,desir:27,detail:1,develop:27,deviat:9,devic:[1,24,27],dft:2,dgi:[10,17],diagon:1,dict:[0,1,2,4,5,6],diff:26,differ:[1,2,6,17,19,26,27],dim:[4,5,19,26],dim_siz:26,dimens:[1,2,4,5,18,24],directli:[0,24,27],disconnect:1,discount:6,discoveri:[17,19],discrimin:6,distinguish:24,distmult:[5,11],distribut:[0,2,3],divers:19,divid:26,document:20,doe:24,doesn:[0,4],doing:10,don:4,done:19,doubl:[1,2],download:[16,19],downstream:[10,17],draw:1,drop:[1,2,5],dropout:4,dropout_ratio:[4,5],drug:[2,17,19],drugdiscoveri:[3,16,17,18,19,24,26,27],due:[1,9,17],dure:[1,24],dynam:1,each:[0,1,2,4,5,6,9,10,16,18,19,26,27],easili:[24,26],ec50:2,ecfp:[1,24],edg:[1,2,4,5,6,10,17,24,26,27],edge2graph:[1,26],edge_attr:4,edge_featur:[1,2,17,24],edge_feature_dim:[1,2],edge_import:24,edge_input_dim:[4,5],edge_list:[1,2,19,24,26,27],edge_map:19,edge_mask:[1,24,27],edge_model:6,edge_weight:[1,24],edgepredict:6,effcient:26,effect:2,effici:[2,18,27],either:24,elabor:26,electron:[1,2],element:[4,27],elif:19,els:19,emb_dim:[4,5,17],embed:[5,18],embedding_dim:[5,18],emploi:24,enabl:[0,24],enable_auto_context:0,encod:[5,26],encourag:6,end2end:19,end:[1,4,24,27],energet:2,energi:2,engin:[0,16,17,18,19],enn:5,enough:27,ensur:19,entiti:[2,5,18],entri:1,entropi:[4,17],enumer:19,epoch:[0,1],eps:[4,5],epsilon:[4,5],equival:[1,24,26,27],essenti:[17,24],estim:[2,4,5],evalu:[0,9,10,16,18,19],everi:[0,1,4,5,6,26],everyth:[0,16,18],exampl:[0,1,4,16,17,18,19,20,24,26,27],except:1,excess:27,excit:2,exclud:[0,1],exist:[18,27],expand:[0,4],expect:1,expens:17,experiment:2,explicit:[0,1],explicit_h:1,explicit_property_prediction_node_featur:1,explicitli:[0,1,2,4],explor:17,extend:[1,27],extens:[20,25],extract:[1,2,24],eye:1,fail:2,fals:[0,1,2,4,5,17,19],fast:[4,5],faster:27,fb15k237:[2,18],fb15k:[2,8,18],fda:[2,16],fda_approv:16,featur:[0,2,3,4,5,6,16,19,24,27],few:16,field:4,figur:[1,26],figure_s:[1,16],file:[0,1,2],fill:27,filter:[2,4,5],fingerprint:[1,4,5],first:[9,17,19,24,26,27],flatten:[19,27],flexibl:20,follow:[0,1,4,16,17,18,19,24,26,27],footprint:24,form:[1,26,27],formal:1,formal_charg:1,former:[4,5,6],forward:[4,5,6,26],frac:26,framework:[19,24,27],free:[2,24],freebas:[2,18],freesolv:2,from:[0,1,2,4,5,6,10,16,17,18,19,24,26,27],from_dens:[1,24],from_molecul:[1,19],from_smil:[0,1,24,27],full:1,fulli:1,fundament:19,further:18,g2g:[12,19],g2gs_reaction_model:19,g2gs_synthon_model:19,gamma:6,gaussian:4,gaussiansmear:4,gcn:[0,5,27],gcpn:7,gcpngener:6,gener:[0,1,6,8,15,19,20,26,27],geometr:2,get:[0,1,24,27],get_edg:1,get_item:1,gin:[5,16,17],gin_model:17,gin_vers:[5,17],give:19,given:[0,1,8,18,19,24],global:4,global_arg:4,goal:19,gpu:[0,16,17,18,19,24,27],graph1:27,graph2:27,graph2graph:1,graph:[1,2,4,5,6,8,10,15,16,17,19,20,25,27],graph_col:[1,16,19],graph_featur:[1,2,24],graph_id:24,graph_mask:1,graphaf:7,graphattentionconv:4,graphconv:4,graphconvolutionalnetwork:5,graphisomorphismconv:4,graphisomorphismconvpretrain:4,graphisomorphismnetwork:5,grid:27,ground:[19,27],group:2,gru:5,h_i:26,h_index:5,h_j:26,half:2,hand:19,handl:0,hard:[0,27],has:[4,18],havard:2,have:[1,2,10,16,24,27],head:[4,6],heaviest:27,height:1,here:[9,10,16,18,19,24,26,27],hidden:[4,5,16,26],hidden_dim:[4,5,6,16,19,27],hidden_dim_mlp:6,hierach:0,hierarch:0,high:[2,17],higher:6,highlight:19,hit:11,hiv:[2,10],hook:[0,4,5,6],hop:6,hot:4,how:[1,4,5,16,18,19,27],human:2,hydrat:2,hydrogen:[1,2],hyperparamet:0,idea:18,identif:[1,6,15],identifi:19,ids:[0,1,24],ignor:[1,4,5,6,19],ignore_error:1,illeg:1,illustr:[16,17,18],imag:27,implement:[1,4,5,24,26,27],improv:4,includ:[0,1,2,4,17,24],independ:[4,16],independentgaussian:4,index:[1,4,24,26],indic:27,individu:19,infer:[0,1,5,18,27],infograph:[5,15],infomax:[6,10,17],inform:[1,4,5,10,17,24],inherit:0,inhibit:2,inhibitor:2,initi:[4,5],input:[4,5,24,25,26],input_dim:[4,5,16,19,27],inspir:0,instal:20,instanc:[0,1,2,4,5,6,16,18,24],instead:[0,4,5,6,27],integ:24,interact:[4,5],interfac:20,intern:24,intersect:19,intuit:[16,24,27],invalid:27,investig:16,invok:0,ion:1,ion_to_molecul:[1,19],irregular:[20,25],is_reaction_atom:19,is_reaction_bond:19,ismorph:5,isol:[1,24,26],isomer:1,isomorph:[4,16],item:[16,19,27],iter:26,its:[16,17,24],itself:17,join:16,jointli:16,just:[19,24],keep:[1,24],keepdim:4,kei:[0,6],kekul:[1,2,19],kernel:[4,5],keyword:1,kind:[18,24,26],knowledg:[2,5,8,15,20,24],knowledgegraphdataset:1,knowledgegraphembed:18,kwarg:[0,1,4],l3_regular:5,label:[2,16],larg:[10,17,24],larger:6,largest:[1,4],last:4,latest:20,latter:[4,5,6],launch:0,layer1:4,layer2:4,layer3:4,layer:[3,5,6,16,20,25,27],layout:1,leaki:4,learn:[4,5,6,10,16,17,18,19,24,27],learn_ep:[4,5],learnabl:4,len:[16,17,19,27],length:[1,4,16,17,19,24,27],less:4,let:[16,18,19,24,26,27],level:[1,2,5,6,24,27],like:[0,6,19,24],likelihood:[4,6,19],limit:9,line:[0,24],linear:17,link:[5,18],lipophil:2,list:[0,1,2,4,5,6,17,24],load:[0,1,2,18,19],load_config_dict:[0,2,5,6],load_csv:1,load_optim:[0,19],load_smil:1,load_tsv:[1,2],loader:1,local:[4,5],log:[0,2,4,19],log_interv:0,log_likelihood:6,logd:2,logic:27,logp:7,longtensor:4,look:19,loop:27,loss:[4,5,6,17,27],loss_weight:5,lot:9,lower:6,lr_schedul:0,mae:6,mai:[0,1,16,18,19,24,26],main:[10,17],mainstream:17,maintain:0,make:[0,27],malaria:2,manag:[0,1,24],mani:[1,27],manner:[10,24],manual:0,manual_se:19,map:[0,1,6,24,26],market:2,mask:[1,4,6,10,15,25,27],mask_rat:6,masked_mean:4,match:1,math:4,mathemat:27,matplotlib:1,matric:24,matrix:[1,24],max:[4,6,27],max_edge_unrol:6,max_nod:6,max_predict:19,max_scor:[5,18],max_siz:27,maxim:[2,4,5,6],mean:[4,6,9,10,17,24,26],mean_with_nan:4,measur:2,mechan:[2,24],member:[0,1],memori:[1,24,27],merg:1,messag:[1,4,5,25],messagepass:4,messagepassingbas:[4,26],messagepassingneuralnetwork:5,meta:[0,1],meta_dict:0,meta_typ:0,meter:0,method:[10,11,17,18,26],metric:[0,5,6,16,17,27],mid:26,might:26,million:24,min:27,mini:1,minim:4,minut:16,miss:18,mlp:[4,5,6],mode:[4,19],model:[0,2,3,4,6,9,10,12,15,17,19,20,25,27],model_context:6,model_context_readout:6,modern:[24,26],modul:[0,4,5,6,16,26],mol:[1,19,24],molecuel:10,molecul:[0,1,2,6,8,15,19,20,24,27],molecular:[4,5,17],molecule_default:1,moleculedataset:1,momentum:6,more:[1,19,27],most:19,motiv:17,mpnn:5,mrr:11,mse:6,much:27,multi:[4,5,16],multi_slice_mask:[4,27],multilayerperceptron:4,multinomi:4,multipl:[0,1,2,4],mutual:[4,5,17],mutualinform:4,muv:[2,10],my_featur:0,my_node_attr:1,myclass:0,name:[0,1,2,26],nan:4,natur:27,ncc:27,nearest:2,need:[0,4,5,6,18,24,26,27],neg:[4,6,17,18],neg_sample_ratio:6,negative_slop:4,neighbor:[2,17],neighborhood:6,nest:1,network:[4,5,6,16,19,20,24,25],networkx:1,neural:[4,5,6,16,20,24,25],neuralfingerprint:5,neuralfingerprintconv:4,neuralfp:5,nfp:5,nll:6,node2graph:[1,26],node:[0,1,2,4,5,6,17,19,24,26,27],node_featur:[0,1,2,17,19,24,27],node_feature_dim:[1,2,16,19],node_id:24,node_in:[1,19,24,26],node_mask:[1,24],node_model:6,node_out:[1,19,24,26],node_posit:2,node_valu:0,non:[1,4,19,24],none:[0,1,2,4,5,6,17,27],nonzero:19,normal:[4,5,24],note:[0,1,2,4,19,20,24,27],notic:26,now:[16,18,19],nproc_per_nod:0,ntarget:16,nuclear:2,num:4,num_atom:1,num_atom_typ:[1,2],num_beam:19,num_bond:1,num_bond_typ:[1,2,19],num_col:[1,19],num_cum_nod:24,num_cum_x:27,num_edg:[1,24,27],num_edge_sampl:6,num_ent:[5,18],num_epoch:[0,16,17,18,19],num_gaussian:[4,5],num_gru_lay:5,num_head:4,num_kernel:4,num_lay:[5,17],num_length:27,num_mlp_lay:[4,5,6],num_neg:18,num_nod:[1,24,26,27],num_node_sampl:6,num_predict:19,num_rel:[1,4,5,18,19,24],num_row:[1,16,24],num_s2s_step:5,num_sampl:4,num_synthon:6,num_work:[1,17],number:[0,1,2,4,5,6,18,27],number_of_gpu:0,object:[0,1],obtain:19,octanol:2,offset:1,onc:[0,16,18,24],one:[4,5,6,16,18,19,26],one_hot:4,onli:[0,1,2,5,9,19,24],oper:[4,24,26,27],optim:[0,6,16,17,18,19],option:[0,1,2,4,5,6],opv:2,order:[0,1,4,6,19,24],ordered_scaffold_split:1,organ:2,origin:[4,5,6,26],other:[1,17,19,24,26],otherwis:1,our:[15,19,24,27],out:[5,19,26],output:[0,1,2,4,5,6,17,25,26],output_dim:[4,5],over:[0,1,4,19,27],overlap:1,overlap_atom:19,overlap_bond:19,overridden:[4,5,6],overwritten:4,own:24,pack:[1,16,19,24,27],pack_offset:27,packag:[0,20],packed_typ:1,packedgraph:[1,24],packedmolecul:[1,19,27],pad:[4,27],page:[9,10,11,12],pagerank:26,pagerankiter:26,pain:24,pair:[1,2,17,19],pairnorm:4,paper:[4,5],parallel:0,paramet:[0,1,2,4,5,6,16,17,18,19],parasit:2,part:[6,16],partial:1,pass:[0,1,4,5,6,24,25],patent:2,path:2,pathwai:[2,19],pdf:1,penal:7,penetr:2,per:[1,6],perceptron:4,perform:[0,4,5,6,9,10,19,26,27],photovolta:2,pick:[24,26],pipelin:19,plausibl:18,plot:[1,16,19,24],plu:8,png:[1,19],polynomi:[4,5],pop:16,popular:[9,18,24],posit:[1,2,4,6,17],possibl:[4,19,27],power:[4,5],ppo:6,practic:24,pre:[5,6,8,15,20],pred:[16,27],pred_atom:19,pred_bond:19,pred_index:27,pred_prob:27,predict:[1,4,5,6,8,15,18,19,20,27],predict_react:19,predict_synthon:[6,19],prefix:[0,27],prepar:[15,27],preprocess:[0,6,19],present:4,pretrain:17,primit:26,print:24,problem:17,process:[1,5,24],produc:[19,24,27],product:[2,6,19],progress:0,proj_model:6,project:[2,6],properli:19,properti:[0,1,2,6,8,15,20,24],property_prediction_edge_featur:1,property_prediction_node_featur:1,propertypredict:[6,16,17],propos:5,protoyp:20,provid:[1,6,17,18,20,24,26],pth:19,pubchem:2,purpl:19,put:[16,18],python:0,pytorch:[0,4,20,26],qed:7,qm8:2,qm9:2,qualit:2,quantum:[2,4,5],queri:1,quick:20,r_index:5,radic:1,radical_electron:1,radiu:[1,4,6],rais:1,rand:1,randint:[1,27],random:[0,6,8,10,19],random_split:[16,17,19],randomli:1,rang:[16,19,27],rapid:20,rate:[4,6],rather:0,ratio:12,rbf:[4,5],rdchem:1,rdkit:1,reactant:[2,19],reaction:[1,2,6,8,19],reaction_cent:[6,19],reaction_center_identification_node_featur:1,reaction_dataset:19,reaction_model:19,reaction_optim:19,reaction_reaction_identif:19,reaction_set:19,reaction_solv:19,reaction_task:19,reaction_test:19,reaction_train:19,reaction_valid:19,reaction_valid_smal:19,reactiondataset:1,readi:18,readout:[5,17,25],reason:[2,8,15,20],recal:19,recept:4,receptor:2,recip:[4,5,6],reciproc:24,recogn:0,record:[0,6],recurs:0,red:19,reduc:[4,18,24],reduct:4,refer:20,refin:2,regist:[0,1,4,5,6],registri:0,regress:2,regular:5,rel:[1,4],relat:[1,2,4,5,18,19,24],relationalgraphconv:4,relationalgraphconvolutionalnetwork:5,relu:[4,5],remov:[1,24,27],repeat:[1,4,27],replac:4,replic:2,report:[9,10],repres:[26,27],represent:[4,5,6,16,17,19,20,24,26,27],requir:24,reset:19,reshuffl:1,respect:[16,24],respons:2,rest:19,restrict:0,result:[1,2,6,16,19],retain:4,retriev:1,retrosynthesi:[6,8,15,20],revers:26,reward:6,reward_temperatur:6,rgcn:[5,19],right:19,ring:24,rmse:6,rotat:[5,11,18],round:1,row:[1,19],run:[4,5,6],s2s:5,same:[1,4,17,19,24,27],sampl:[1,2,4,6,16,18,19,27],sampler:1,save:[0,1,19,24],save_fil:[1,19],scaffold:[1,8,10],scaffold_split:1,scale:[2,4,5,17,24],scale_individu:4,scatter:26,scatter_add:26,scatter_mean:26,scenario:[0,24],schedul:0,schnet:[4,5],score:5,screen:2,search:[0,19],second:26,secretas:2,see:[1,19],seed:19,seen:17,select:16,self:[8,15,26],semi:[1,4,5,6],semisupervis:1,send:26,separ:[0,5],separate_model:[5,17],sequenti:4,serv:26,set2set:5,set:[0,1,2,4,6,9,10,12,16,17,18,19],setup:16,sever:[19,24],shape:[1,4,24,27],shift:4,shifted_softplu:[4,5],short_cut:[5,16],should:[1,4,5,6,19,24],show:[1,9,19,26,27],shuffl:1,side:[19,26],sider:[2,10],sigma2:4,sigma:4,sigmoid:16,signal:17,signatur:4,silent:[0,4,5,6],similar:[16,17],similarli:19,simpl:[5,11],simpli:18,sinc:[4,5,6,26],singl:[1,2,24],size:[0,1,4,19,24,27],slice:[4,24,27],slope:4,small:[2,19],smaller:[18,27],smallest:[4,27],smear:4,smile:[1,24],smiles_field:1,smiles_list:[1,27],softmax:4,softplu:4,solubl:2,solut:27,solver:[16,17,18,19],some:[16,19,24,26,27],someth:0,sort:1,sourc:[0,1,2,4,5,6,26],space:[5,9],spars:[1,24,27],sparsifi:4,special:[5,17],specif:[0,1,16,17,26],specifi:[0,1,18,24,26],spectra:2,spectral:[4,5],spite:27,split:[0,1,8,10,12,16,18,19],spring:1,squar:26,squeez:27,standard:[5,18,19],start:[4,20,27],state:[0,2,26],state_dict:0,statist:2,statu:16,step:[0,4,5,26,27],stop:[4,19],store:[0,1,2,24],str:[0,1,2,4,5,6],stress:2,string:[0,1,4,24],structur:[1,10,16,17,20,25,26],sub:19,subbatch:1,subclass:[4,5,6],subgraph:[1,6,25],subprocess:1,subset:[2,10,19,24],substructur:6,suggest:0,sum:[4,5,16,27],sum_:26,summari:6,sup:10,supervis:[1,4,5,6,8,15],support:[0,1,4,20,24,26],suppos:4,surpress:0,synchron:0,synthesi:19,synthon:[2,6,15],synthon_complet:19,synthon_dataset:19,synthon_id:19,synthon_model:19,synthon_optim:19,synthon_solv:19,synthon_task:19,synthon_test:19,synthon_train:19,synthon_valid:19,synthoncomplet:[6,19],system:2,t_index:5,tabl:1,tag:1,take:[4,5,6,16,18,19,24,27],target:[1,2,4,6,16,19,26,27],target_field:1,task:[0,1,2,3,9,10,16,17,18,19,20,27],temperatur:[6,18],tensor:[0,1,4,24,27],test:[0,9,10,12,15],test_set:[0,16,18],text:27,than:[0,1,4,27],thei:[0,1,4,24],them:[4,5,6,19,27],therefor:27,thermodynam:2,thi:[0,1,2,4,5,6,9,10,11,12,16,17,18,19,24,26,27],third:24,those:[2,17],though:17,three:[24,26],through:[0,16,27],throughput:2,time:[1,27],titl:[1,16,19],to_molecul:[1,19],to_scaffold:1,to_smil:1,togeth:[16,18],toi:[17,27],tolist:[1,19],toolbox:20,top1_index:19,top3_index:27,top3_valu:27,top:[4,6,12,19,20,27],torch:[0,1,4,16,17,18,19,24,26,27],torch_data:[17,19],torch_scatt:26,total:19,tox21:[2,10],toxcast:[2,10],toxic:2,toxicolog:2,toxiti:16,track:[0,1],train:[0,5,6,8,9,12,15,19,20],train_set:[0,6,16,17,18],trake:0,trans:[5,11],transfer:[5,24],transform:[1,2],translat:[5,19],trial:[2,16],trick:24,triplet:[2,5,18],triplet_list:24,trivial:[2,26],true_atom:19,true_bond:19,truth:[19,27],tsv:[1,2],tsv_file:[1,2],tupl:[1,4,16],tutori:18,two:[1,4,5,10,12,16,19,27],type:[0,1,2,4,6,17,19,24],typic:[0,24,27],u_i:26,union:[4,19],unknown:8,unlik:27,unnecessari:27,unnorm:4,unpack:[1,24],unpack_data:1,unpacked_typ:1,unsqueez:[19,26,27],unsupervis:[5,6,17],updat:[0,5,6,26],use:[0,1,5,16,18,19,24,26,27],used:[0,1,4,18,19,24,26],useful:1,uses:24,using:[10,18,19],uspto50k:[2,19],uspto50k_synthon_valid:19,uspto:2,usual:27,util:[1,16,17,19],valid:[0,9,10,12,16,18,19,27],valid_set:[0,16,18],valu:[0,4,6,16,26,27],vanilla:[4,9],variabl:24,variad:[1,4,25],variadic_accuraci:27,variadic_cross_entropi:[4,27],variadic_log_softmax:[4,27],variadic_max:[4,27],variadic_mean:[4,27],variadic_sum:[4,27],variadic_topk:[4,27],varianc:[4,26],variant:[4,5],vdot:[1,24],vector:[4,18],verbos:[1,2,6],version:[2,24],via:5,view:[17,26,27],virtual:2,visual:[1,16,19,24,27],vitro:2,want:24,water:2,weight:[1,5,6],well:[18,19,20],when:[0,4,26,27],whenev:27,where:[0,1,12,24,26,27],whether:[2,4],which:[0,1,18,19,27],width:1,wildcard:1,window:1,wise:1,with_hydrogen:[1,2],within:[4,5,6],without:[0,2],wn18:[2,8],wn18rr:[2,8],won:0,word:24,wordnet:2,work:19,wrap:[19,24],wrapper:6,write:[24,27],wrong:19,you:[0,1,18],your:[20,25],your_script:0,zero:[1,24],zinc15:10,zinc250k:[2,7],zinc2m:2,zinc:2,zip:16},titles:["drugdiscovery.core","drugdiscovery.data","drugdiscovery.datasets","Documentation","drugdiscovery.layers","drugdiscovery.models","drugdiscovery.tasks","Graph Generation","Benchmark","Molecule Property Prediction","Molecule Property Prediction with Pre-Training","Knowledge Graph Reasoning","Retrosynthesis","&lt;no title&gt;","Molecule Generation","Examples","Molecule Property Prediction","Molecule Property Prediction with Pre-Training","Knowledge Graph Reasoning","Retrosynthesis","Drugdiscovery - A deep learning platform for drug discovery","Installation","Debug Your Models","Custom Extensions","Graph Data Structures","Notes","Graph Neural Network Layers","Batch Irregular Structures","Quick Start"],titleterms:{"class":12,"function":4,attribut:[17,24],bace:9,batch:[24,27],bbbp:9,benchmark:8,broadcast:26,center:19,cep:9,clintox:9,common:4,complet:19,conv:4,core:0,creat:24,custom:23,data:[1,24],dataset:[2,16,18,19],debug:22,deep:20,defin:[16,18],discoveri:20,distribut:4,document:3,drug:20,drugdiscoveri:[0,1,2,4,5,6,20],esol:9,exampl:15,extens:23,fb15k:11,featur:1,freesolv:9,gener:[7,14],given:12,graph:[7,11,18,24,26],hiv:9,identif:19,infograph:17,input:27,instal:21,irregular:27,knowledg:[11,18],layer:[4,26],learn:20,lipophil:9,malaria:9,mask:[17,24],messag:26,model:[5,16,18,22],molecul:[9,10,14,16,17],muv:9,network:26,neural:26,note:25,our:[16,18],output:27,pass:26,platform:20,plu:10,pre:[10,17],predict:[9,10,16,17],prepar:[16,18,19],properti:[9,10,16,17],qm8:9,qm9:9,quick:28,random:9,reaction:12,readout:26,reason:[11,18],retrosynthesi:[12,19],scaffold:9,self:[10,17],sider:9,split:9,start:28,structur:[24,27],subgraph:24,supervis:[10,17],synthon:19,task:6,test:[16,18],tox21:9,toxcast:9,train:[10,16,17,18],unknown:12,uspto50k:12,variad:27,wn18:11,wn18rr:11,your:22}})