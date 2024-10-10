# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 10, 2024 12:26:55
# Database: sqlite:////tmp/tmp.V7srmlxGbb/car_parts/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Table storing customer details.
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    OrderList : Mapped[List["Order"]] = relationship(back_populates="customer")



class Manufacturer(SAFRSBaseX, Base):
    """
    description: Table storing manufacturer details.
    """
    __tablename__ = 'manufacturers'
    _s_collection_name = 'Manufacturer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    country = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CarModelList : Mapped[List["CarModel"]] = relationship(back_populates="manufacturer")



class PartCategory(SAFRSBaseX, Base):
    """
    description: Table storing part categories.
    """
    __tablename__ = 'part_categories'
    _s_collection_name = 'PartCategory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    PartList : Mapped[List["Part"]] = relationship(back_populates="category")



class Supplier(SAFRSBaseX, Base):
    """
    description: Table storing suppliers of parts.
    """
    __tablename__ = 'suppliers'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    contact_info = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    SupplierPartList : Mapped[List["SupplierPart"]] = relationship(back_populates="supplier")



class Warehouse(SAFRSBaseX, Base):
    """
    description: Table storing warehouse details.
    """
    __tablename__ = 'warehouses'
    _s_collection_name = 'Warehouse'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    WarehousePartList : Mapped[List["WarehousePart"]] = relationship(back_populates="warehouse")



class CarModel(SAFRSBaseX, Base):
    """
    description: Table storing car model details.
    """
    __tablename__ = 'car_models'
    _s_collection_name = 'CarModel'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    manufacturer_id = Column(ForeignKey('manufacturers.id'), nullable=False)

    # parent relationships (access parent)
    manufacturer : Mapped["Manufacturer"] = relationship(back_populates=("CarModelList"))

    # child relationships (access children)
    CarList : Mapped[List["Car"]] = relationship(back_populates="model")



class Order(SAFRSBaseX, Base):
    """
    description: Table storing customer orders.
    """
    __tablename__ = 'orders'
    _s_collection_name = 'Order'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("OrderList"))

    # child relationships (access children)
    OrderDetailList : Mapped[List["OrderDetail"]] = relationship(back_populates="order")



class Part(SAFRSBaseX, Base):
    """
    description: Table storing individual parts.
    """
    __tablename__ = 'parts'
    _s_collection_name = 'Part'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    category_id = Column(ForeignKey('part_categories.id'), nullable=False)

    # parent relationships (access parent)
    category : Mapped["PartCategory"] = relationship(back_populates=("PartList"))

    # child relationships (access children)
    OrderDetailList : Mapped[List["OrderDetail"]] = relationship(back_populates="part")
    SupplierPartList : Mapped[List["SupplierPart"]] = relationship(back_populates="part")
    WarehousePartList : Mapped[List["WarehousePart"]] = relationship(back_populates="part")
    CarPartList : Mapped[List["CarPart"]] = relationship(back_populates="part")



class Car(SAFRSBaseX, Base):
    """
    description: Table storing individual cars.
    """
    __tablename__ = 'cars'
    _s_collection_name = 'Car'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vin = Column(String, nullable=False, unique=True)
    model_id = Column(ForeignKey('car_models.id'), nullable=False)
    year = Column(Integer)

    # parent relationships (access parent)
    model : Mapped["CarModel"] = relationship(back_populates=("CarList"))

    # child relationships (access children)
    CarPartList : Mapped[List["CarPart"]] = relationship(back_populates="car")



class OrderDetail(SAFRSBaseX, Base):
    """
    description: Table storing detailed items in each order.
    """
    __tablename__ = 'order_details'
    _s_collection_name = 'OrderDetail'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    order_id = Column(ForeignKey('orders.id'), nullable=False)
    part_id = Column(ForeignKey('parts.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    order : Mapped["Order"] = relationship(back_populates=("OrderDetailList"))
    part : Mapped["Part"] = relationship(back_populates=("OrderDetailList"))

    # child relationships (access children)



class SupplierPart(SAFRSBaseX, Base):
    """
    description: Table mapping suppliers to the parts they supply.
    """
    __tablename__ = 'supplier_parts'
    _s_collection_name = 'SupplierPart'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    supplier_id = Column(ForeignKey('suppliers.id'), nullable=False)
    part_id = Column(ForeignKey('parts.id'), nullable=False)
    price = Column(Float)

    # parent relationships (access parent)
    part : Mapped["Part"] = relationship(back_populates=("SupplierPartList"))
    supplier : Mapped["Supplier"] = relationship(back_populates=("SupplierPartList"))

    # child relationships (access children)



class WarehousePart(SAFRSBaseX, Base):
    """
    description: Table tracking part inventory in warehouses.
    """
    __tablename__ = 'warehouse_parts'
    _s_collection_name = 'WarehousePart'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    warehouse_id = Column(ForeignKey('warehouses.id'), nullable=False)
    part_id = Column(ForeignKey('parts.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    part : Mapped["Part"] = relationship(back_populates=("WarehousePartList"))
    warehouse : Mapped["Warehouse"] = relationship(back_populates=("WarehousePartList"))

    # child relationships (access children)



class CarPart(SAFRSBaseX, Base):
    """
    description: Table storing parts associated with specific cars.
    """
    __tablename__ = 'car_parts'
    _s_collection_name = 'CarPart'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    car_id = Column(ForeignKey('cars.id'), nullable=False)
    part_id = Column(ForeignKey('parts.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    car : Mapped["Car"] = relationship(back_populates=("CarPartList"))
    part : Mapped["Part"] = relationship(back_populates=("CarPartList"))

    # child relationships (access children)
